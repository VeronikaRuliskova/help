/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const links = {
    contact : {
        en : ["contact-us", "Contact"],
        cs : ["kontakt", "Kontakt"],
    },
    privacy : {
        en : ["privacy", "Privacy"],
        cs : ["ochrana-soukromi", "Zásady ochrany osobních údajů"]
    },
    terms : {
        en : ["terms", "Terms and Conditions"],
        cs : ["podminky-pouziti", "Obchodní podmínky"]
    }
};

class Footer extends React.Component {

    webPageUrl(slug)
    {
        let lang = this.props.language;
        slug = links[slug][lang][0];

        return `https://www.bulkgate.com/${lang}/${slug}/`;
    }

    webPageName(slug)
    {
        let lang = this.props.language;

        return links[slug][lang][1];
    }

    render() {
        const currentYear = new Date().getFullYear();

        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
                    <div className="logo">
                        <a
                            href="https://www.bulkgate.com"
                            target="_blank"
                            className="fbOpenSource">
                            <img
                                src={this.props.config.baseUrl + 'img/logo-foot.svg'}
                                alt="BulkGate"
                                width="100"
                            />
                        </a>
                    </div>
                    <div>
                        TOPefekt s.r.o. <br/> &copy; {currentYear}
                    </div>
                    <div>
                        <a href={this.webPageUrl("contact")}>
                            {this.webPageName("contact")}
                        </a>
                        <a href={this.webPageUrl("privacy")}>
                            {this.webPageName("privacy")}
                        </a>
                        <a href={this.webPageUrl("terms")}>
                            {this.webPageName("terms")}
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.youtube.com/channel/UCGD7ndC4z2NfuWUrS-DGELg"
                            rel="nofollow"
                            target="_blank"
                        >
                            YouTube
                        </a>
                        <a
                            href="https://www.facebook.com/topefekt/"
                            rel="nofollow"
                            target="_blank"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.linkedin.com/company/topefekt-s-r-o-/"
                            rel="nofollow"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>
            </footer>
        );
    }
}

module.exports = Footer;
