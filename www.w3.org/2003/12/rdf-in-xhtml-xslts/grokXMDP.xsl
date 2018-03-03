<xsl:stylesheet 
    xmlns:xsl  ="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:h    ="http://www.w3.org/1999/xhtml"
    xmlns:rdf  ="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:rdfs ="http://www.w3.org/2000/01/rdf-schema#"
    >

<!--
  $Id: grokXMDP.xsl,v 1.8 2007/01/22 23:58:19 connolly Exp $
  interpret XMDP as RDF/RDFS.
  cf http://gmpg.org/xmdp/description
  -->

<xsl:output method="xml" indent="yes"/>

<xsl:template match="h:html">
  <rdf:RDF>
    <!-- @@ probably need xml:base or absolue URIs here or some such -->
    <rdf:Description rdf:about="">
      <rdfs:comment>@@base URI probably not right</rdfs:comment>
    </rdf:Description>

    <xsl:for-each select=".//h:dl[@class='profile']/h:dt">

      <xsl:choose>
	<xsl:when test='@id="rel"'>
	  <!-- new link types -->
	  <xsl:for-each select="following-sibling::h:dd[1]//h:dl/h:dt">
	    <xsl:call-template name="prop" />
	  </xsl:for-each>
	</xsl:when>

	<xsl:when test='.="class"'>
	  <!-- new link types -->
	  <xsl:for-each select="following-sibling::h:dd[1]//h:dl/h:dt">
	    <xsl:call-template name="prop" />
	  </xsl:for-each>
	</xsl:when>

	<xsl:otherwise>
	  <!-- @@ hmm... are class values also properties? -->
	  <xsl:call-template name="prop" />
	</xsl:otherwise>
      </xsl:choose>

    </xsl:for-each>
  </rdf:RDF>
</xsl:template>


<xsl:template name="prop">
  <rdfs:Property rdf:about="#{@id}">
    <rdfs:label><xsl:value-of select='.'/></rdfs:label>
    <rdfs:comment>
      <!-- @@ we were gonna use parseType="Literal"
	   and xsl:copy-of, but cwm doesn't grok, so... -->
      <xsl:value-of select='following-sibling::h:dd[1]'/>
    </rdfs:comment>
    
    <!-- @@ nested dl's represent enumerated values -->
  </rdfs:Property>
</xsl:template>

<!-- don't pass text thru -->
<xsl:template match="text()|@*">
</xsl:template>


</xsl:stylesheet>
