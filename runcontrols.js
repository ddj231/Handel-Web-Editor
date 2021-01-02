
export function RunControls(props) {
    return React.createElement(
        "div",
        { className: "col" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row d-flex flex-row justify-content-end" },
                React.createElement(
                    "div",
                    { className: "w-50 m-1 text-center" },
                    "HNDL"
                )
            ),
            React.createElement(
                "div",
                { className: "row d-flex flex-row justify-content-end" },
                React.createElement(
                    "a",
                    { className: "d-block w-50 m-1 text-center" },
                    "Play"
                )
            ),
            React.createElement(
                "div",
                { className: "row d-flex flex-row justify-content-end" },
                React.createElement(
                    "a",
                    { className: "w-50 d-block m-1 text-center" },
                    "Stop"
                )
            )
        )
    );
}