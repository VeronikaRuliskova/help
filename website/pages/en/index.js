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
const videosUrl = {
    cs : {
        all : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0sX8WP906N7I6Ggc4T0Eo2P&disable_polymer=true",
        address_book : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0t2fjpTTQTZLq8qCyOEPP7N&disable_polymer=true",
        sms_campaign : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0sXKJPOldIENxGAUwBhsmvm&disable_polymer=true",
        business_page : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0sBQBzufy3AIATr4YzVRnu3&disable_polymer=true",
        records : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0tQpYeIqKONXSrdIqvkbPem&disable_polymer=true",
    },
    en : {
        all : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0sJ_dUF9eRJh0F0lGjkH-7p&disable_polymer=true",
        address_book : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0txr-UZh7G0Ul4MTD3Wh2Q7&disable_polymer=true",
        sms_campaign : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0ugQ0LwprF68wLmVzdDLASZ&disable_polymer=true",
        business_page : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0tnJNejvh-yoUnl5E084pNB&disable_polymer=true",
        records : "https://www.youtube.com/playlist?list=PL3m8jKRwlM0sQlppoGhclVv5VeLRiFaQH&disable_polymer=true",
    }
};

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
                        <Button href={videosUrl[language].all} rel="nofollow">
                            <translate>Videos</translate>
                        </Button>
                        <Button href={`https://www.bulkgate.com/${language}/`}>
                            <translate>Web</translate>
                        </Button>
                    </PromoSection>
                </HomeContainer>
                <HomeContainer id="topics">
                    <h2>
                        <translate>Favorite Topics</translate>
                    </h2>
                    <Row>
                        <Flex wrap>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Address book</translate>}
                                    url={docUrl("importing-contacts-via-excel.html", language)}
                                    videoUrl={videosUrl[language].address_book}
                                    ico="address_book"
                                    text={<translate>Read how you can work with your contacts.</translate>}
                                    btnText={<translate>Read topic</translate>}
                                    watchBtnText={<translate>Videos</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Creating SMS campaigns</translate>}
                                    url={docUrl("creating-sms-campaign.html", language)}
                                    videoUrl={videosUrl[language].sms_campaign}
                                    ico="campaigns"
                                    text={<translate>Read how you can create classic and smart SMS campaigns.</translate>}
                                    btnText={<translate>Read topic</translate>}
                                    watchBtnText={<translate>Videos</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Business page</translate>}
                                    url={docUrl("business-page.html", language)}
                                    videoUrl={videosUrl[language].business_page}
                                    ico="business_page"
                                    text={<translate>Read how you can work with your business page.</translate>}
                                    btnText={<translate>Read topic</translate>}
                                    watchBtnText={<translate>Videos</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Records & statistics</translate>}
                                    url={docUrl("campaigns.html", language)}
                                    videoUrl={videosUrl[language].records}
                                    ico="records"
                                    text={<translate>Read how you can work records in BulkGate.</translate>}
                                    btnText={<translate>Read topic</translate>}
                                    watchBtnText={<translate>Videos</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Payments and billing</translate>}
                                    url={docUrl("purchasing-credit.html", language)}
                                    ico="payment"
                                    text={<translate>Read how you can pay and manage your billing data.</translate>}
                                    btnText={<translate>Read topic</translate>}
                                />
                            </Col>
                            <Col s12 m4>
                                <TopicCategory
                                    name={<translate>Price list</translate>}
                                    url={docUrl("using-price-list.html", language)}
                                    ico="price_list"
                                    text={<translate>Read how you can work with price list and it's SMS price calculator.</translate>}
                                    btnText={<translate>Read topic</translate>}
                                />
                            </Col>
                        </Flex>
                    </Row>
                </HomeContainer>
                <HomeContainer id="questions">
                    <h2>
                        <translate>FAQ</translate>
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
