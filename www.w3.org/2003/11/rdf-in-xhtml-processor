<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:html="http://www.w3.org/1999/xhtml"
  xmlns:uri="http://www.w3.org/2000/07/uri43/uri.xsl?template="
  xmlns:grddl="http://www.w3.org/2003/11/rdf-in-xhtml-processor"
  xmlns:dataview="http://www.w3.org/2003/g/data-view#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  exclude-result-prefixes="uri html grddl">

  <!-- $Id: rdf-in-xhtml-processor.xsl,v 1.46 2007/05/30 12:18:21 dom Exp $ -->
  <!-- @@open source license. Share and Enjoy. -->

  <xsl:import href="http://www.w3.org/2000/07/uri43/uri.xsl"/>
  <xsl:output method="xml" encoding="utf-8" indent="yes" media-type="application/rdf+xml"/>

  <xsl:param name="xmlfile"/>
  <xsl:variable name="baseURI">
    <xsl:choose>
      <xsl:when test="/*[@xml:base]">
        <xsl:value-of select="/*[@xml:base]"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$xmlfile"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:variable>


  <!-- The generic grddl processor (i.e. working also on XML files -->
  <xsl:variable name="grddlProcessor" select="'http://www.w3.org/2004/01/rdxh/grddl-xml-processor'"/>

  <!-- the grddl profile -->
  <xsl:variable name="grddlProfile" select="'http://www.w3.org/2003/g/data-view'"/>

  <xsl:template match="/html:html">
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xml:base='{$xmlfile}'>
      <xsl:call-template name="grddl:XHTMLInterpreter"/>
    </rdf:RDF>
  </xsl:template>


  <xsl:template name="grddl:XHTMLInterpreter"
		xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <xsl:param name="xmlfile" select="$xmlfile"/>
    <xsl:comment>XHTML Transformation produced by $Id: rdf-in-xhtml-processor.xsl,v 1.46 2007/05/30 12:18:21 dom Exp $</xsl:comment>
    <xsl:call-template name="perProfileTransforms">
      <xsl:with-param name="xmlfile" select="$xmlfile"/>
      <xsl:with-param name="profileList" select="/html:html/html:head/@profile"/>
    </xsl:call-template>
  </xsl:template>


  <!-- This template is recursive, ends when $profileList is tempty -->
  <xsl:template name="perProfileTransforms">
    <xsl:param name="profileList"/>
    <xsl:if test="normalize-space($profileList)">
      <!-- selecting 1st profile in white space separated list -->
      <!-- profile URIs aren't forbidden to be relative... -->
      <xsl:variable name="currentProfile">
          <xsl:call-template name="uri:expand">
            <xsl:with-param name="base" select="$baseURI"/>
            <xsl:with-param name="there" select="substring-before(concat(normalize-space($profileList),' '),' ')"/>
          </xsl:call-template>
      </xsl:variable>
      
      <!-- GRDDLizing it, to get the list of transformations associated with it -->
      <xsl:variable name="transformResultUri">
        <!-- Avoid infinite loop! -->
        <xsl:choose>
          <xsl:when test="not($currentProfile=$grddlProfile)">
            <xsl:value-of select="concat(
                                  'http://www.w3.org/2000/06/webdata/xslt?',
                                  'xslfile=', $grddlProcessor, '&amp;',
                                  'xmlfile=', $currentProfile)"/>
          </xsl:when>
          <xsl:otherwise>
              <xsl:value-of select="concat(
                                    'http://www.w3.org/2000/06/webdata/xslt?',
                                    'xslfile=http://www.w3.org/2003/12/rdf-in-xhtml-xslts/grddlProfileProcessor.xsl',
                                    '&amp;xmlfile=',$xmlfile )"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>

      <xsl:if test="normalize-space($transformResultUri)">
        <xsl:variable name="transformResultTree" select="document(normalize-space($transformResultUri))/rdf:RDF"/>

        <!-- and then applying each of the per-profile transforms to the original document -->
        <xsl:choose>
          <!-- simplest case: grddl Profile -->
          <xsl:when test="$currentProfile=$grddlProfile">
            <xsl:for-each select="$transformResultTree/*/dataview:transformation[@rdf:resource]">
              <xsl:call-template name="individualTransform">
                <xsl:with-param name="transformation" select="@rdf:resource"/>
                <xsl:with-param name="baseUri" select="$xmlfile"/>
              </xsl:call-template>
            </xsl:for-each>
          </xsl:when>
          <xsl:otherwise>
            <xsl:for-each select="$transformResultTree/*[dataview:profileTransformation/@rdf:resource]">
              <xsl:variable name="profileTransformationSubject">
                <xsl:variable name="base">
                  <xsl:choose>
                    <xsl:when test="ancestor-or-self::*[@xml:base]">
                      <xsl:value-of select="ancestor-or-self::*[@xml:base][position()=1]/@xml:base"/>
                    </xsl:when>
                    <xsl:otherwise>
                      <xsl:value-of select="$currentProfile"/>
                    </xsl:otherwise>
                  </xsl:choose>
                </xsl:variable>
                <xsl:call-template name="uri:expand">
                  <xsl:with-param name="base"
                                  select="$base"/>
                  <xsl:with-param name="there" select="@rdf:about"/>
                </xsl:call-template>
              </xsl:variable>
              <xsl:message>Looking for <xsl:value-of select="$profileTransformationSubject"/></xsl:message>
              <xsl:if test="$profileTransformationSubject=$currentProfile">
                <xsl:message>Found  profile transform: <xsl:value-of select="dataview:profileTransformation/@rdf:resource"/></xsl:message>
                <xsl:for-each select="dataview:profileTransformation[@rdf:resource]">
                  <xsl:call-template name="individualTransform">
                    <xsl:with-param name="transformation" select="@rdf:resource"/>
                    <xsl:with-param name="baseUri" select="$currentProfile"/>
                  </xsl:call-template>
                </xsl:for-each>
              </xsl:if>
            </xsl:for-each>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:if>
      <xsl:call-template name="perProfileTransforms">
        <xsl:with-param name="xmlfile" select="$xmlfile"/>
        <xsl:with-param name="profileList" 
                        select="substring-after($profileList,' ')" />
      </xsl:call-template>
    </xsl:if>
  </xsl:template>
  
  <xsl:template name="individualTransform">
    <xsl:param name="transformation"/>
    <xsl:param name="baseUri"/>
    <xsl:variable name="xslfile">
      <!-- Absolute URI of the XSLT -->
      <xsl:call-template name="uri:expand">
        <xsl:with-param name="base"
                        select="$baseUri"/>
        <xsl:with-param name="there" select="$transformation"/>
      </xsl:call-template>
    </xsl:variable>
    <xsl:message>Adding results of transform from <xsl:value-of select="document(concat('http://www.w3.org/2000/06/webdata/xslt?',
                'xslfile=', $xslfile, '&amp;',
                'xmlfile=', $xmlfile))/rdf:RDF/*"/>
    </xsl:message>
    <xsl:copy-of
        select="document(concat('http://www.w3.org/2000/06/webdata/xslt?',
                'xslfile=', $xslfile, '&amp;',
                'xmlfile=', $xmlfile))/rdf:RDF/*"/>
    
  </xsl:template>
</xsl:stylesheet>

