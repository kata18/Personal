<!-- $Id: home2rss092.xsl,v 1.11 2001/05/31 18:37:41 danbri Exp $ -->

<!-- see http://www.w3.org/2000/08/w3c-synd/ for details. 
	based on home2rss.xsl by connolly@w3.org -->

<xsl:transform 
    xmlns:xsl  ="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:h    ="http://www.w3.org/1999/xhtml"
    xmlns:uri  ="http://www.w3.org/2000/07/uri43/uri.xsl?template="

    exclude-result-prefixes="uri h"
    >

 <!-- xalan doesn't grok relative URIs in imports. Sigh.
<xsl:import href="../../07/uri43/uri.xsl"/>
-->

<xsl:import href="http://www.w3.org/2000/07/uri43/uri.xsl"/>
<xsl:param name="Base"/>
<xsl:param name="Channel"/>
<xsl:param name="Page"/>

<xsl:variable name="Profile" select='"http://www.w3.org/2000/08/w3c-synd/#"'/>


<xsl:output method="xml" indent="yes" encoding="us-ascii"/>
 <!-- @@ encoding="us-ascii" is not honored by XT;
      per http://www.jclark.com/xml/xt.html
  Version 19991105 -->
<div xmlns="http://www.w3.org/1999/xhtml">
<!-- what is this for??-->
</div>

<xsl:template match='h:html
        [h:head/@profile=$Profile]'>

  <rss version="0.92">
    <xsl:variable name="RCSDate">
  <xsl:value-of
   select = 'normalize-space(substring-before(substring-after(
          h:body/h:address,
          concat("$", "Date:")), "$"))'/>
    </xsl:variable>

    <!-- convert yyyy/mm/dd hh:mm:ss to yyyy-mm-ddThh:mm:ssZ -->
    <xsl:variable name="ISODate">
  <xsl:value-of
   select = 'concat(translate($RCSDate, "/ ", "-T"), "Z")'/>
    </xsl:variable>

    <xsl:message>@@ date
  rcsdate: <xsl:value-of select="$RCSDate"/>
  isodate: <xsl:value-of select="$ISODate"/>
    </xsl:message>

    <channel>
      <title><xsl:value-of select="h:head/h:title"/></title>
      <link><xsl:value-of select="$Page"/></link> 
      <description>
        <xsl:value-of select='h:body/h:h2[@id="slogan"]'/>
      </description>
      <language>
        <xsl:value-of select='/h:html/@lang' />
      </language>
      <docs>http://backend.userland.com/rss092</docs> 


      <xsl:for-each select='.//h:div[@class="item"]'>
        <xsl:variable name="itemURI">
    <xsl:call-template name="uri:expand">
      <xsl:with-param name="there"
          select='.//h:a[@rel="details"]/@href'/>
            <xsl:with-param name="base" select="$Base"/>
    </xsl:call-template>
  </xsl:variable>

        <item>
          <link><xsl:value-of select="$itemURI"/></link>
          <title><xsl:value-of select='normalize-space(h:h2)'/></title>
          <description><xsl:value-of select='normalize-space(h:p)'/>
          </description>
        </item>
      </xsl:for-each>


    </channel>
  </rss>

</xsl:template>


<xsl:template name="format-date">
  <xsl:param name="DDMonthYYYY"/>

  <xsl:variable name="DD" select='format-number(number(substring-before($DDMonthYYYY, " ")), "00")'/>
  <xsl:variable name="YYYY" select='format-number(number(substring-after(substring-after($DDMonthYYYY, " "), " ")), "0000")'/>
  <xsl:variable name="month" select='substring(substring-before(substring-after($DDMonthYYYY, " "), " "), 1, 3)'/>
  <xsl:variable name="m">
    <xsl:choose>
      <xsl:when test="$month='Jan'"><xsl:value-of select="1"/></xsl:when>
      <xsl:when test="$month='Feb'"><xsl:value-of select="2"/></xsl:when>
      <xsl:when test="$month='Mar'"><xsl:value-of select="3"/></xsl:when>
      <xsl:when test="$month='Apr'"><xsl:value-of select="4"/></xsl:when>
      <xsl:when test="$month='May'"><xsl:value-of select="5"/></xsl:when>
      <xsl:when test="$month='Jun'"><xsl:value-of select="6"/></xsl:when>
      <xsl:when test="$month='Jul'"><xsl:value-of select="7"/></xsl:when>
      <xsl:when test="$month='Aug'"><xsl:value-of select="8"/></xsl:when>
      <xsl:when test="$month='Sep'"><xsl:value-of select="9"/></xsl:when>
      <xsl:when test="$month='Oct'"><xsl:value-of select="10"/></xsl:when>
      <xsl:when test="$month='Nov'"><xsl:value-of select="11"/></xsl:when>
      <xsl:when test="$month='Dec'"><xsl:value-of select="12"/></xsl:when>
    </xsl:choose>
  </xsl:variable>   
  <xsl:variable name="MM" select='format-number($m, "00")'/>

  <xsl:message>@@format date:
    in: <xsl:value-of select="$DDMonthYYYY"/>
    dd: <xsl:value-of select="$DD"/>
    month: <xsl:value-of select="$month"/>
    m: <xsl:value-of select="$m"/>
    MM: <xsl:value-of select="$MM"/>
    yyyy: <xsl:value-of select="$YYYY"/>
  </xsl:message>

  <xsl:value-of select='concat($YYYY, "-", format-number($MM, "00"), "-", $DD)'/>
</xsl:template>

<!-- don't pass text thru -->
<xsl:template match="text()|@*">
</xsl:template>

</xsl:transform>
