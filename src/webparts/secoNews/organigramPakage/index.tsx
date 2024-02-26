import * as React from "react";
import { Layouts, TwoChildLayout, StageLayout, TreeLayout, OrganigramNode, ThreeChildLayout, VerticalLayout, VerticalLayoutNode } from "./typings"
import "./style.css"

export function nodeMaxShownMembersSetter(value: number) {
    NodeMaxShownMembers = value;
}
export function popupMaxShownMembersSetter(value: number) {
    PopupMaxShownMembers = value;
}

var NodeMaxShownMembers = 2;
var PopupMaxShownMembers = 5;
function NodeLayoutBuilder(props: { layout: OrganigramNode | VerticalLayoutNode }) {
    let popupWrapper = React.useRef<HTMLDivElement>(null);
    let nodeOnMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setTimeout(() => {
        popupWrapper.current && window.getComputedStyle(popupWrapper.current).opacity == "0" ? popupWrapper.current?.style.setProperty("display", "none") : "";
    }, 500);
    let nodeOnMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => popupWrapper.current?.style.setProperty("display", "block")

    if (!props.layout.newsNode) {
        return <div style={{ background: typeof props.layout.color != "undefined" ? props.layout.color : "var(--beige)" }}
            className={`node ${props.layout.type != "ParentNode" ? "child-node" : ""} ${props.layout.type.slice(0, -4).toLowerCase()}-node`}
            onMouseLeave={nodeOnMouseLeave}
            onMouseOver={nodeOnMouseOver}
        >
            <a href={typeof props.layout.href == "undefined" ? "#" : props.layout.href} target="_blank"></a>
            <div className='title'>{props.layout.title}</div>
            {
                typeof props.layout.roles != "undefined" ?
                    <>
                        <div className='roles'>
                            {props.layout.roles.slice(0, NodeMaxShownMembers).map((role, index) => <div key={index} className='role'>{role}</div>)}
                            {props.layout.roles.length > NodeMaxShownMembers ? <div className="ellipsis">...</div> : <></>}
                        </div>
                        {props.layout.roles.length > NodeMaxShownMembers ? <div className="popup-wrapper" ref={popupWrapper}>
                            {typeof props.layout.popupHref !== "undefined" ?
                                <a className="title" href={props.layout.popupHref} target="_blank">Members</a> :
                                <div className="title">Members</div>
                            }
                            <div className="subtitle">{props.layout.roles.slice(0, PopupMaxShownMembers).map((role, index) => <div key={index} className='role'>{role}</div>)}</div>
                            {props.layout.roles.length > PopupMaxShownMembers ? <div className="ellipsis">...</div> : <></>}
                            <div className="pointer"></div>
                        </div>
                            : ""
                        }
                    </>
                    : ""
            }
        </div>;
    } else {
        return <div data-news-node style={{ background: typeof props.layout.color != "undefined" ? props.layout.color : "var(--beige)" }}
            className={`node ${props.layout.type != "ParentNode" ? "child-node" : ""} ${props.layout.type.slice(0, -4).toLowerCase()}-node`}
            onMouseLeave={nodeOnMouseLeave}
            onMouseOver={nodeOnMouseOver}
        >
            {typeof props.layout.upperTitle != "undefined" ?
                <div className='upper-title'>{props.layout.upperTitle}</div> : ""
            }
            <div className='title'>
                <a href={typeof props.layout.href == "undefined" ? "#" : props.layout.href} target="_blank"></a>
                {props.layout.title}
            </div>
            {
                typeof props.layout.newsLinks != "undefined" ?
                    <>
                        <div className='news'>
                            News showed on{" "}
                            {props.layout.newsLinks.map((newsLink, index, newsLinks) => index < newsLinks.length - 1 ? <><a key={index} href={newsLink}>Link</a> and </> : <a key={index} href={newsLink}>Link</a>)}
                            {/* {props.layout.newsLinks.length > NodeMaxShownMembers ? <div className="ellipsis">...</div> : <></>} */}
                        </div>
                        {<div className="popup-wrapper" ref={popupWrapper}>
                            {typeof props.layout.popupHref !== "undefined" ?
                                <a className="title" href={props.layout.popupHref} target="_blank">Members</a> :
                                <div className="title">Members</div>
                            }
                            <div className="subtitle">{props.layout.roles ? props.layout.roles.slice(0, PopupMaxShownMembers).map((role, index) => <div key={index} className='role'>{role}</div>)
                                : <></>}</div>
                            {(props.layout.roles && props.layout.roles.length > PopupMaxShownMembers) ? <div className="ellipsis">...</div> : <></>}
                            <div className="pointer"></div>
                        </div>
                        }
                    </>
                    : ""
            }
        </div>;
    }
}

function TwoChildLayoutBuilder(props: { layout: TwoChildLayout }) {
    return <TreeLayoutBuilder layout={
        {
            type: "Tree",
            parentNode: props.layout.parentNode,
            stages: [{ type: "Stage", rightNode: props.layout.rightNode, leftNode: props.layout.leftNode }]
        }} />
}
function ThreeChildLayoutBuilder(props: { layout: ThreeChildLayout }) {
    return <div className='three-child-container'>
        <div className="left-child">
            {typeof props.layout.leftNode != "undefined" ? <>
                <div className="linker"></div>
                <div className="spacer"></div>
                <div className="child-container">
                    <LayoutBuilder layout={props.layout.leftNode} />
                </div>
            </> : ""}
        </div>
        <div className="middle-child">
            {typeof props.layout.middleNode != "undefined" ? <>
                <div className="linker"></div>
                <div className="child-container">
                    <LayoutBuilder layout={props.layout.middleNode} />
                </div>
            </> : ""}
        </div>
        <div className="right-child">
            {typeof props.layout.rightNode != "undefined" ? <>
                <div className="linker"></div>
                <div className="spacer"></div>
                <div className="child-container">
                    <LayoutBuilder layout={props.layout.rightNode} />
                </div>
            </> : ""}
        </div>
    </div>
}

function StageLayoutBuilder(props: { layout: StageLayout }) {
    return <div className='stage-container'>
        <div className="stage-left">
            {typeof props.layout.leftNode != "undefined" ? <>
                <div className="linker"></div>
                <div className="spacer"></div>
                <div className="child-container">
                    <LayoutBuilder layout={props.layout.leftNode} />
                </div>
            </> : ""}
        </div>
        {(typeof props.layout.middleLine == 'undefined') ||
            props.layout.middleLine == true ? <div className="middle-line"></div> : <></>}
        <div className="stage-right">
            {typeof props.layout.rightNode != "undefined" ? <>
                <div className="linker"></div>
                <div className="spacer"></div>
                <div className="child-container">
                    <LayoutBuilder layout={props.layout.rightNode} />
                </div>
            </> : ""}
        </div>
    </div>
}
function TreeLayoutBuilder(props: { layout: TreeLayout }) {
    return <div className='tree-container'>
        <NodeLayoutBuilder layout={props.layout.parentNode} />
        <div className="linker"></div>
        <div className='children-container'>
            {props.layout.stages.slice(0, -1).map((stage: StageLayout, index: number) => <LayoutBuilder key={index} layout={stage} />)}
            <LayoutBuilder layout={{ ...props.layout.stages[props.layout.stages.length - 1], middleLine: false }} />
        </div>
    </div>
}
function VerticalLayoutBuilder(props: { layout: VerticalLayout }) {
    return <div className='vertical-container'>
        <NodeLayoutBuilder layout={props.layout.parentNode} />
        <div className="linker"></div>
        <div className='children-container'>
            {props.layout.children.slice(0, -1).map((node: OrganigramNode, index: number) => {
                return <div key={index} className="child">
                    <div className="linker"></div>
                    <NodeLayoutBuilder layout={node} />
                </div >
            })}
            <div className="child">
                <div className="linker"></div>
                <NodeLayoutBuilder layout={{ ...props.layout.children[props.layout.children.length - 1] }} />
            </div >
        </div>
    </div>
}

export function LayoutBuilder(props: { layout: Layouts }) {
    switch (true) {
        case props.layout.type == "VerticalNode" ||
            props.layout.type == "ParentNode" ||
            props.layout.type == "LeftNode" ||
            props.layout.type == "MiddleNode" ||
            props.layout.type == "RightNode":
            return <NodeLayoutBuilder layout={props.layout as OrganigramNode} />
            break;
        case props.layout.type == "TwoChild":
            return TwoChildLayoutBuilder({ layout: props.layout as TwoChildLayout })
            break;
        case props.layout.type == "ThreeChild":
            return ThreeChildLayoutBuilder({ layout: props.layout as ThreeChildLayout })
            break;
        case props.layout.type == "Tree":
            return <TreeLayoutBuilder layout={props.layout as TreeLayout} />
            break;
        case props.layout.type == "Stage":
            return <StageLayoutBuilder layout={props.layout as StageLayout} />
            break;
        case props.layout.type == "Vertical":
            return <VerticalLayoutBuilder layout={props.layout as VerticalLayout} />
            break;
    }
    return <></>
}