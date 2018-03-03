<?xml-stylesheet href="http://www.w3.org/StyleSheets/base.css" type="text/css"?>
<?xml-stylesheet href="http://www.w3.org/2002/02/style-xsl.css" type="text/css"?>
<xsl:stylesheet 
    xmlns:xsl  ="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:h    ="http://www.w3.org/1999/xhtml"
    xmlns:cc   ="http://web.resource.org/cc/"
    xmlns:dc   ="http://purl.org/dc/elements/1.1/"
    xmlns:rdf  ="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:dt   ="http://www.w3.org/2001/XMLSchema#"
    >

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Stylesheet to extract RDF Creative Common Licenses from XHTML documents</title>
      <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    </head>
    <body>
      <div class='head'><a href="/"><img src='/Icons/w3c_home' alt='W3C'/></a></div>
      <h1>Stylesheet to extract RDF Creative Common Licenses from XHTML documents</h1>
<p>This transformation produces formalized Creative Commons licenses
from informal HTML licenses, per <a
href="http://www.w3.org/2003/11/rdf-in-xhtml-proposal">RDF in XHTML
proposal</a>. (see also:
<a href="http://www.w3.org/2003/11/rdf-in-xhtml-demo">demo</a>.)
</p>
<p>To use this xslt2rdf style sheet, you just need to put a link to the appropriate Creative Common License, with a <code>rel</code> attribute set to <code>cc-license</code> (so that one can e.g. publish a list of links to the CC licenses with a well-defined CC-license).</p>

<address>
<a href="http://www.w3.org/People/Connolly/">Dan Connolly</a>  and <a href="/People/Dom/">Dominique Haza&#xeb;l-Massieux</a><br />
<small>$Id: grokCC.xsl,v 1.6 2003/12/05 14:19:08 dom Exp $</small>
</address>
</body>
</html>

<rdf:RDF>
  <!-- @@ Unsure I got it right; this really belongs to the CC guys -->
  <cc:License rdf:about="http://creativecommons.org/licenses/by-nd/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
  </cc:License>
  <cc:License rdf:about="http://creativecommons.org/licenses/by/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
  </cc:License>
  <cc:License rdf:about="http://creativecommons.org/licenses/by-nd-nc/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
    <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse"/>
  </cc:License>

  <cc:License rdf:about="http://creativecommons.org/licenses/by-nc/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
    <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse"/>
  </cc:License>

  <cc:License rdf:about="http://creativecommons.org/licenses/by-nc-sa/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>
    <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>
  </cc:License>

  <cc:License rdf:about="http://creativecommons.org/licenses/by-sa/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>
  </cc:License>
  <cc:License rdf:about="http://creativecommons.org/licenses/nd/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
  </cc:License>
  <cc:License rdf:about="http://creativecommons.org/licenses/nd-nc/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
  </cc:License>
  <cc:License rdf:about="http://creativecommons.org/licenses/nc/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
    <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse"/>
  </cc:License>
  <cc:License rdf:about="http://creativecommons.org/licenses/nc-sa/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>
    <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse"/>
  </cc:License>
  <cc:License rdf:about="http://creativecommons.org/licenses/sa/1.0/">
    <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
    <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
    <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>
  </cc:License>

</rdf:RDF>

<xsl:output method="xml" indent="yes"/>

<xsl:template match="h:html">
  <rdf:RDF>

    <!-- the @rel test should take into account white space list of tokens -->
    <xsl:if test=".//h:a[@rel='cc-license' and starts-with(@href,'http://creativecommons.org/licenses/by-nd/1.0/') and document('')/xsl:stylesheet/rdf:RDF/cc:License/@rdf:about = @href]">
      <cc:Work rdf:about="">
        <xsl:for-each select=".//h:a[@rel='cc-license' and starts-with(@href,'http://creativecommons.org/licenses/by-nd/1.0/') and document('')/xsl:stylesheet/rdf:RDF/cc:License/@rdf:about = @href]">
          <cc:license>
            <xsl:copy-of select="document('')/xsl:stylesheet/rdf:RDF/cc:License[@rdf:about=current()/@href]"/>
          </cc:license>
        </xsl:for-each>
      </cc:Work>
    </xsl:if>

  </rdf:RDF>
</xsl:template>


<!-- don't pass text thru -->
<xsl:template match="text()|@*">
</xsl:template>


</xsl:stylesheet>
