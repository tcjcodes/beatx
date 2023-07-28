import React from "react"

const mainStyle = {
    backgroundColor: '#000',
    color: 'white',
    fontFamily: `"Roboto Mono", Menlo, monospace`,
}

export default function Layout({children}) {
    return <div style={mainStyle}>{children}</div>
}
