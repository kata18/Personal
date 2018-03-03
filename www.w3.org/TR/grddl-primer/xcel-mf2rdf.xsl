<?xml version="1.0" encoding="UTF-8"?>
<!-- 
xcel-mf2rdf - Excel Microformat Extraction to RDF
2005-08-12

This stylesheet will transform SpreadsheetML (i.e., Excel spreadsheets exported 
as XML) to RDF statements, effectively acting as a GRDDL document (see:
http://www.w3.org/2004/01/rdxh/spec). 

Statements are extracted based upon hints in Named Cells. The following hints are
recognized:

* Header - table headers
* Data - table data

Upon processing, each row in the table will be represented as a bNode, with a
property for each Header in the same row or column. Property names are derived from
alternate Names for the Header cells.

Additionally, each Data cell will be added as a statement to the bNode, whose
property name is derived from the alternate Name for the Data cell.

For example, if a cell has the names "Data" and "rating" and a value of "3.5", 
and another cell in the same row or column has the names "Header" and "first_name" 
and a value of "Bob", the following statements will be generated (in n3 here for 
convenience);

  [ :rating "3.5"; :first_name "bob" ] .

The stylesheet checks for a 'profile' custom document property with the same 
value as the profile_id variable below, and will warn if it is not present. 
This assures that the special-purpose Named Cells are not accidentally present
in the file.

Properties are put into the namespace specified by the 'namespace' custom 
document property, and default to the default_namespace variable specified below.

   
Copyright (c) 2005 Mark Nottingham <mnot@pobox.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.   

"This product may incorporate intellectual property owned by Microsoft
Corporation. The terms and conditions upon which Microsoft is licensing such
intellectual property may be found at
http://msdn.microsoft.com/library/en-us/odcXMLRef/html/odcXMLRefLegalNotice.asp."
-->

<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    exclude-result-prefixes="ss o"
    xmlns:exsl="http://exslt.org/common"
    extension-element-prefixes="exsl"
    version="1.0">
  <xsl:output indent="yes"/>
  <xsl:variable name="profile_id">http://www.mnot.net/2005/08/xcel-mf</xsl:variable>
  <xsl:variable name="default_namespace">http://www.example.org/#</xsl:variable>

  <xsl:template match="/">
    <xsl:variable name="_context">
      <xsl:apply-templates select="." mode="normalise"/>
    </xsl:variable>
    <xsl:variable name="context" select="exsl:node-set($_context)"/>

    <xsl:variable name="namespace"
      select="normalize-space($context/
                descendant::o:CustomDocumentProperties/o:namespace[1])"/>
    <xsl:call-template name="checkProfile">
      <xsl:with-param name="context" select="$context"/>
    </xsl:call-template>

    <rdf:RDF>
      <xsl:for-each select="$context/descendant::ss:Cell
          [ss:NamedCell/@ss:Name='Data'][normalize-space()]">
        <xsl:call-template name="getStatements">
          <xsl:with-param name="cell" select="."/>
          <xsl:with-param name="namespace" select="$namespace"/>
        </xsl:call-template>
      </xsl:for-each>
    </rdf:RDF>
  </xsl:template>

  <!-- Complain if it doesn't explicitly declare a profile. -->
  <xsl:template name="checkProfile">
    <xsl:param name="context"/>
    <xsl:if test="not($context/descendant::o:CustomDocumentProperties/
                        o:profile/descendant::text()=$profile_id)">
      <xsl:message>Profile <xsl:value-of
        select="$profile_id"/> not found.</xsl:message>
    </xsl:if>
  </xsl:template>
  
  <xsl:template name="getStatements">
    <xsl:param name="cell"/>
    <xsl:param name="namespace" select="$default_namespace"/>

    <xsl:variable name="_rowHeaders">
      <xsl:call-template name="getRowHeaders">
        <xsl:with-param name="cell" select="$cell"/>
      </xsl:call-template>
    </xsl:variable>
    <xsl:variable name="rowHeaders" select="exsl:node-set($_rowHeaders)"/>

    <xsl:variable name="_columnHeaders">
      <xsl:call-template name="getColumnHeaders">
        <xsl:with-param name="cell" select="$cell"/>
      </xsl:call-template>
    </xsl:variable>
    <xsl:variable name="columnHeaders"
                  select="exsl:node-set($_columnHeaders)"/>

    <rdf:Description>
      <xsl:for-each select="$rowHeaders/ss:Cell|$columnHeaders/ss:Cell">
        <xsl:variable name="_name">
          <xsl:call-template name="getFilteredCellNames">
            <xsl:with-param name="cell" select="."/>
          </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="name" select="exsl:node-set($_name)"/>

        <xsl:element name="{$name[1]}" namespace="{$namespace}">
          <xsl:value-of select="ss:Data"/>
        </xsl:element>
      </xsl:for-each>

      <xsl:variable name="_name">
        <xsl:call-template name="getFilteredCellNames">
          <xsl:with-param name="cell" select="$cell"/>
        </xsl:call-template>
      </xsl:variable>
      <xsl:variable name="name" select="exsl:node-set($_name)"/>

      <xsl:element name="{$name[1]}" namespace="{$namespace}">
        <xsl:value-of select="$cell/ss:Data"/>
      </xsl:element>
    </rdf:Description>
  </xsl:template>

  <!-- return the named cells from the context. -->
  <xsl:template name="getNamedCells">
    <xsl:param name="name"/>
    <xsl:param name="context"/>
    <xsl:copy-of select="$context/descendant::ss:Cell
                          [ss:NamedCell/@ss:Name=$name]"/>
  </xsl:template>

  <!-- return the names of the cell, filtered for known values. -->
  <xsl:template name="getFilteredCellNames">
    <xsl:param name="cell"/>
    <xsl:value-of select="$cell/ss:NamedCell[@ss:Name!='Header']
                                            [@ss:Name!='Data']/@ss:Name"/>
  </xsl:template>

  <!-- return the cells in the same column as this one which have a given name. -->
  <xsl:template name="getColumnHeaders">
    <xsl:param name="cell"/>
    <xsl:param name="header_id">Header</xsl:param>
    <xsl:variable name="index" select="$cell/@ss:Index"/>
    <xsl:copy-of select="$cell/../../ss:Row/ss:Cell
                           [ss:NamedCell/@ss:Name=$header_id]
                           [@ss:Index&lt;=$index]
                           [@ss:Index=$index or
                             (@ss:Index+@ss:MergeAcross)>=$index]"/>
  </xsl:template>
  
  <!-- return the cells in the same row as this one which have a given name. -->
  <xsl:template name="getRowHeaders">
    <xsl:param name="cell"/>
    <xsl:param name="header_id">Header</xsl:param>
    <xsl:variable name="header_cells"
      select="$cell/../ss:Cell[ss:NamedCell/@ss:Name=$header_id]"/> 
    <xsl:variable name="merged_header_cells"
      select="$cell/../preceding-sibling::ss:Row/ss:Cell
        [ss:NamedCell/@ss:Name=$header_id]
        [@ss:MergeDown >= $cell/../@ss:Index - ../@ss:Index]"/>
    <xsl:copy-of select="$header_cells|$merged_header_cells"/>
  </xsl:template>

  <!-- Normalise the spreadsheet by adding ss:Index where appropriate.
  Adapted from http://eric.van-der-vlist.com/blog/1310_Normalizing_Excel's_SpreadsheetML_using_XSLT.item -->

  <xsl:template match="@*|node()" mode="normalise">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()" mode="normalise"/>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="ss:Row/@ss:Index" mode="normalise"/>
  <xsl:template match="ss:Cell/@ss:Index" mode="normalise"/>
  <xsl:template match="ss:Row" mode="normalise">
    <xsl:copy>
      <xsl:apply-templates select="@*" mode="normalise"/>
      <xsl:variable name="prevRows" select="preceding-sibling::ss:Row"/>
      <xsl:attribute name="ss:Index">
        <xsl:choose>
          <xsl:when test="@ss:Index">
            <xsl:value-of select="@ss:Index"/>
          </xsl:when>
          <xsl:when test="count($prevRows) = 0">
            <xsl:value-of select="1"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="count($prevRows) + 1"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>
      <xsl:apply-templates select="node()" mode="normalise"/>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="ss:Cell" mode="normalise">
    <xsl:copy>
      <xsl:apply-templates select="@*" mode="normalise"/>
      <xsl:variable name="prevCells" select="preceding-sibling::ss:Cell"/>
      <xsl:variable name="indexVal">
        <xsl:choose>
          <xsl:when test="@ss:Index">
            <xsl:value-of select="@ss:Index"/>
          </xsl:when>
          <xsl:when test="count($prevCells) = 0">
            <xsl:value-of select="1"/>
          </xsl:when>
          <xsl:when test="count($prevCells[@ss:Index]) > 0">
            <xsl:variable name="lastIndexed"
                          select="$prevCells[@ss:Index][last()]"/>
            <xsl:value-of select="($lastIndexed/@ss:Index) +
                ((count($prevCells) + 1) -
                (count($lastIndexed/preceding-sibling::ss:Cell)
                + 1)) + sum($prevCells/@ss:MergeAcross)"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="count($prevCells) + 1 +
                sum($prevCells/@ss:MergeAcross)"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>
      <xsl:attribute name="ss:Index">
        <xsl:value-of select="$indexVal"/>
      </xsl:attribute>
      <xsl:apply-templates select="node()" mode="normalise"/>
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
