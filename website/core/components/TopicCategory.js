const React = require("react");
import {Flex} from "./flex";

class TopicCategory extends React.Component
{
    render()
    {
        let {name, text, btnText, watchBtnText, ico, url, videoUrl} = this.props;

        return (
            <div className="cat">
                <Flex css="header" horizontalItems="center">
                    <img src={`/img/topics/${ico}.svg`} />
                </Flex>
                <h3>{name}</h3>
                <div className="text">
                    {text}
                </div>
                <a className="button" href={url}>
                    {btnText}
                </a>
                {videoUrl &&
                <a className="button watch" href={videoUrl}>
                    {watchBtnText}
                </a>
                }
            </div>
        );
    }
}

module.exports = TopicCategory;

