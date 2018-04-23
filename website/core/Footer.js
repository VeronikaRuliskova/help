/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
    }

    pageUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + (language ? language + '/' : '') + doc;
    }

    render() {
        const currentYear = new Date().getFullYear();

        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
                    <div className="logo">
                        <a
                            href="https://portal.bulkgate.com"
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
                        <a href="https://www.bulkgate.com/en/contact">
                            Contact
                        </a>
                        <a href="https://www.bulkgate.com/en/privacy/">
                            Privacy
                        </a>
                        <a href="https://www.bulkgate.com/en/terms/">
                            Terms
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.youtube.com/channel/UCaeI-Xo88dj6cIDjSi8XAxw"
                            target="_blank">
                            YouTube
                        </a>
                        <a
                            href="https://www.facebook.com/topefekt/"
                            target="_blank">
                            Facebook
                        </a>
                        <a href="https://www.linkedin.com/company/topefekt-s-r-o-/" target="_blank">
                            LinkedIn
                        </a>
                    </div>
                </section>
            </footer>
        );
    }
}

module.exports = Footer;
