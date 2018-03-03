<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:html="http://www.w3.org/1999/xhtml"
  xmlns:uri="http://www.w3.org/2000/07/uri43/uri.xsl?template="
  xmlns:rdf  ="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:dataview="http://www.w3.org/2003/g/data-view#"
  exclude-result-prefixes="uri html">

  <!-- $Id: grddlProfileTransformation.xsl,v 1.2 2004/11/05 10:48:09 dom Exp $ -->
  <!-- @@open source license. Share and Enjoy. -->
  <!-- The transformation implied by the using the GRDDL profile -->
  <!-- @@@ should be referenced from the GRDDL profile -->


  <xsl:import href="http://www.w3.org/2000/07/uri43/uri.xsl"/>
  <xsl:output method="xml" encoding="utf-8" indent="yes"/>

  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Stylesheet to extract GRDDL Profile Transformers from XHTML documents</title>
      <link rel="stylesheet" href="http://www.w3.org/StyleSheets/base"/>
    </head>
    <body>
      <div class='head'><a href="/"><img src='/Icons/w3c_home' alt='W3C'/></a></div>
      <h1>Stylesheet to extract GRDDL Profile Transformers from XHTML documents</h1>
<p>This transformation produces a list of <a href="http://www.w3.org/TR/grddl/">GRDDL profile transformers</a> 
from XHTML. It implements the mechanism (@@@not yet) described in the GRDDL spec, where each link (<code>link</code> or <code>a</code>) with a <code>rel</code> attribute set to <code>profileTransformation</code> is used to identify a transformer associated to the profile identified by the URI of the given document. It also allows to describe profiles identified by fragments of the URI of the given document, in an elements with a <code>class</code> attribute set to <code>subProfile</code>, containing a link to the said fragment with a <code>rel</code> attribute set to <code>profile</code>, and another link with a <code>profileTransformation</code> <code>rel</code> as described above.</p>

<address>
<a href="/People/Dom/">Dominique Haza&#xeb;l-Massieux</a><br />
<small>$Id: grddlProfileTransformation.xsl,v 1.2 2004/11/05 10:48:09 dom Exp $</small>
</address>
</body>
</html>

<xsl:template match="/">
  <rdf:RDF>
  <rdf:Description rdf:about="">
    <xsl:for-each select="/html:html//html:*[not(@class='subProfile')]//html:*[@href and
                            @rel='profileTransformation']">
      <dataview:profileTransformation rdf:resource='{@href}'/>
    </xsl:for-each>
  </rdf:Description>
  <xsl:for-each select="/html:html//html:*[@class='subProfile'][html:*[@href and @rel='profileTransformation'] and html:*[@href and @rel='profile']]">
    <rdf:Description rdf:about="{.//html:*[@href and @rel='profile']/@href}">
      <xsl:for-each select=".//html:*[@href and @rel='profileTransformation']">
        <dataview:profileTransformation rdf:resource='{@href}'/>
      </xsl:for-each>
    </rdf:Description>
  </xsl:for-each>
  </rdf:RDF>
</xsl:template>

</xsl:stylesheet>