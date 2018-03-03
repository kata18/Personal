<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?>
<?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>

<xsl:stylesheet 
    xmlns:xsl  ="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:h    ="http://www.w3.org/1999/xhtml"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:foaf="http://xmlns.com/foaf/0.1/"
    xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
    xmlns:rdf  ="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:dt   ="http://www.w3.org/2001/XMLSchema#"
    >

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Stylesheet to extract formalized location metadata from XHTML documents</title>
      <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    </head>
    <body>
      <div class='head'><a href="/"><img src='/Icons/w3c_home' alt='W3C'/></a></div>
      <h1>Stylesheet to extract formalized location metadata from XHTML documents</h1>


      <p>This transformation produces formalized location metadata
      (ala <a href="http://esw.w3.org/topic/GeoInfo">ESW Geo Info notes</a>)
      from <a href="http://geourl.org/add.html">GeoURL conventions</a>.</p>

<p>It's designed for use with
an <a
href="http://www.w3.org/2003/11/rdf-in-xhtml-proposal">RDF in XHTML
proposal</a>. (see also:
<a href="http://www.w3.org/2003/11/rdf-in-xhtml-demo">demo</a>.)
</p>

<address>
  <a href="http://www.w3.org/People/Connolly/">Dan Connolly</a> and <a href="/People/Dom/">Dominique Haza&#xeb;l-Massieux</a><br />
<small>$Id: grokGeoURL.xsl,v 1.4 2003/12/05 14:03:20 dom Exp $</small>
</address>
</body>
</html>

<xsl:output method="xml" indent="yes"/>

<xsl:template match="h:html">
  <rdf:RDF>

    <xsl:for-each select="h:head">
      <rdf:Description rdf:about=""> <!-- hmm... xml:base? a param? -->
	<xsl:for-each select="h:meta[@name = 'ICBM']">
	  <xsl:variable name="lat" select='substring-before(@content, ",")'/>
	  <xsl:variable name="lon" select='substring-after(@content, ",")'/>

	  <foaf:topic rdf:parseType="Resource">
	    <geo:lat><xsl:value-of select='$lat'/></geo:lat>
	    <geo:long><xsl:value-of select='$lon'/></geo:long>
	  </foaf:topic>
	</xsl:for-each>

	<xsl:for-each select="h:meta[@name = 'DC.title']">
	  <dc:title><xsl:value-of select='@content'/></dc:title>
	</xsl:for-each>
      </rdf:Description>
    </xsl:for-each>

  </rdf:RDF>
</xsl:template>


<!-- don't pass text thru -->
<xsl:template match="text()|@*">
</xsl:template>


</xsl:stylesheet>
