const React = require("react");
import {Flex} from "./flex";

class TopicCategory extends React.Component
{
    render()
    {
        let {name, text, btnText, ico, url} = this.props;

        return (
            <a className="cat" href={url}>
                <Flex css="header" horizontalItems="center">
                    <img src={`/img/topics/${ico}.svg`} />
                </Flex>
                <h3>{name}</h3>
                <div className="text">
                    {text}
                </div>
                <div className="button">
                    {btnText}
                </div>
            </a>
        );
    }
}

module.exports = TopicCategory;

