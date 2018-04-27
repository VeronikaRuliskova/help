import React from "react";

const Row = (props) => {
    var css = ["row", props.css].filter((v) => v).join(" ");

    return (
        <div id={props.id} className={css} onClick={props.onClick}>{props.children}</div>
    );
};

/*Row.propTypes = {
    css : React.PropTypes.string,
    children : React.PropTypes.arrayOf(React.PropTypes.element),
};*/

export default Row;