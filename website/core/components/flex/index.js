import React from "react";
import PropTypes from "prop-types";

export class Flex extends React.PureComponent
{
    static _PREFIX = "bg-flex";

    static propTypes = {
        container : PropTypes.bool,
        wrap : PropTypes.bool,
        grow : PropTypes.bool,
        direction : PropTypes.oneOf(["horizontal", "vertical"]),
        verticalItems : PropTypes.string,
        horizontalItems : PropTypes.string,
        self : PropTypes.oneOf(["start", "center", "end", "stretch"]),
        css : PropTypes.string,
        onClick : PropTypes.func,
    };

    static defaultProps = {
        container : true,
        wrap : false,
        grow : false,
        direction : "horizontal",
    };

    render()
    {
        let {children, direction, container, wrap, grow, verticalItems, horizontalItems, self, onClick, css:outerCss} = this.props;

        let css = [
            self ? `${Flex._PREFIX}-item` : null,
            container ? `${Flex._PREFIX}-container` : null,
            wrap ? "wrap" : null,
            grow ? "grow" : null,
            direction === "vertical" ? "column" : null,
            direction === "vertical" && verticalItems ? `justify-${verticalItems}` : null,
            direction === "vertical" && horizontalItems ? `align-${horizontalItems}` : null,
            direction === "horizontal" && verticalItems ? `align-${verticalItems}` : null,
            direction === "horizontal" && horizontalItems ? `justify-${horizontalItems}` : null,
            self ? self : null,
            outerCss,
        ];

        return (
            <div className={css.filter(cls => cls).join(" ")} onClick={onClick}>
                {children}
            </div>
        )
    }
}
