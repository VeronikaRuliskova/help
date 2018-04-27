import React from "react";
import attributes from "./cols-attrs";

class Col extends React.PureComponent
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let css = ["col"];
        let props = this.props;

        Object.keys(props).forEach((prop) => {
            let index = attributes.indexOf(prop);
            if (index >= 0) {
                css.push(attributes[index]);
            }
        });
        css = [...css, props.css].filter((v) => v).join(" ");

        return (
            <div id={props.id} className={css} onClick={props.onClick}>{props.children}</div>
        );
    }
}

export default Col;