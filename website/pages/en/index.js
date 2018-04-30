/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const translate = require("../../server/translate.js").translate;
const CompLibrary = require('../../core/CompLibrary.js');
const TopicCategory = require(process.cwd() + "/core/components/TopicCategory.js");
const Grid = require(process.cwd() + "/core/components/grid");
const {Col, Row} = Grid.default;
const {Flex} = require(process.cwd() + "/core/components/flex");
const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
    return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
    return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
    return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
    render() {
        return (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={this.props.href} target={this.props.target} rel={this.props.rel}>
                    {this.props.children}
                </a>
            </div>
        );
    }
}

Button.defaultProps = {
    target: '_self',
};

const HomeContainer = props => (
    <div id={props.id} className="homeContainer">
        <div className="wrapper homeWrapper">{props.children}</div>
    </div>
);

const ProjectTitle = props => (
    <h1 className="projectTitle">
        <translate>Help Center</translate>
        <small>{siteConfig.tagline}</small>
    </h1>
);

const PromoSection = props => (
    <div className="section promoSection">
        <div className="promoRow">
            <div className="pluginRowBlock">{props.children}</div>
        </div>
    </div>
);

class HomeSplash extends React.Component {
    render() {
        let language = this.props.language || '';
        return (
            <div>
                <HomeContainer id="head">
                    <ProjectTitle/>
                    <PromoSection>
                        <Button href="https://portal.bulkgate.com" rel="nofollow">
                            <translate>Try It Out</translate>
                        </Button>
                        <Button href="https://www.youtube.com/channel/UCGD7ndC4z2NfuWUrS-DGELg" rel="nofollow">
                            <translate>Videos</translate>
                        </Button>
                    </PromoSection>
                </HomeContainer>
                <HomeContainer id="topics">
                    <h2>
                        <translate>Favorite topics</translate>
                    </h2>
                    <Row>
                        <Flex wrap>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Address book</translate>}
                                    url={docUrl("importing-contacts-via-excel.html", language)}
                                    ico="address_book"
                                    text={<translate>Read how you can work with your contacts.</translate>}
                                    btnText={<translate>View topic</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Creating SMS campaigns</translate>}
                                    url={docUrl("creating-sms-campaign.html", language)}
                                    ico="campaigns"
                                    text={<translate>Read how you can create classic and smart SMS campaigns.</translate>}
                                    btnText={<translate>View topic</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Business page</translate>}
                                    url={docUrl("business-page.html", language)}
                                    ico="business_page"
                                    text={<translate>Read how you can work with your business page.</translate>}
                                    btnText={<translate>View topic</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Records</translate>}
                                    url={docUrl("campaigns.html", language)}
                                    ico="records"
                                    text={<translate>Read how you can work records in BulkGate.</translate>}
                                    btnText={<translate>View topic</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Payments and billing</translate>}
                                    url={docUrl("purchasing-credit.html", language)}
                                    ico="payment"
                                    text={<translate>Read how you can pay and manage your billing data.</translate>}
                                    btnText={<translate>View topic</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Price list</translate>}
                                    url={docUrl("using-price-list.html", language)}
                                    ico="price_list"
                                    text={<translate>Read how you can work with price list and it's SMS price calculator.</translate>}
                                    btnText={<translate>View topic</translate>}
                                />
                            </Col>
                        </Flex>
                    </Row>
                </HomeContainer>
                <HomeContainer id="questions">
                    <h2>
                        <translate>What you are asking for?</translate>
                    </h2>
                    <div className="box-list">
                        <ul>
                            <li><a href={docUrl("url-shortener.html", language)}><translate>How do I create a new short URL?</translate></a></li>
                            <li><a href={docUrl("inbox.html", language)}><translate>Can I have a two-way communication with a customer?</translate></a></li>
                            <li><a href={docUrl("creating-sms-campaign.html", language)}><translate>How do I create SMS campaign?</translate></a></li>
                            <li><a href={docUrl("business-page.html", language)}><translate>How can I create a business page?</translate></a></li>
                            <li><a href={docUrl("offers-doc.html", language)}><translate>How can I create an offer?</translate></a></li>
                            <li><a href={docUrl("importing-contacts-to-campaign-via-address-book.html", language)}><translate>How can I import contacts to my campaign?</translate></a></li>
                            <li><a href={docUrl("sender-type.html", language)}><translate>Can I send a message under my company's name?</translate></a></li>
                            <li><a href={docUrl("purchasing-credit.html", language)}><translate>What are credits? Do they have an expiration date?</translate></a></li>
                            <li><a href={docUrl("using-price-list.html", language)}><translate>How to use price calculator?</translate></a></li>
                            <li><a href={docUrl("campaigns.html", language)}><translate>How can I get an overview of my campaigns?</translate></a></li>
                        </ul>
                    </div>
                </HomeContainer>
            </div>
        );
    }
}

class Index extends React.Component {
    render() {
        let language = this.props.language || '';

        return (
            <div>
                <HomeSplash language={language}/>
                <div className="mainContainer">

                </div>
            </div>
        );
    }
}

module.exports = Index;
