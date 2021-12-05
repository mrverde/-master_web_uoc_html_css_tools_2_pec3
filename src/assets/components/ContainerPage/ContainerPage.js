import React from "react";

const ContainerPage = props => {
    return <main className="mx-auto max-w-fullhd">
        {props.children}
    </main>
}

export default ContainerPage;