

export type Layouts = VerticalLayout | TwoChildLayout | ThreeChildLayout | TreeLayout | StageLayout | OrganigramNode

export type TwoChildLayout = { type: "TwoChild", parentNode: ParentNode, leftNode: LeftNode, rightNode: RightNode }

export type ThreeChildLayout =
    {
        type: "ThreeChild", leftNode: LeftNode | VerticalLayout | TwoChildLayout | ThreeChildLayout | TreeLayout | StageLayout,
        middleNode: MiddleNode | VerticalLayout | TwoChildLayout | ThreeChildLayout | TreeLayout | StageLayout,
        rightNode: RightNode | VerticalLayout | TwoChildLayout | ThreeChildLayout | TreeLayout | StageLayout, middleLine?: false
    }

export type VerticalLayout = { type: "Vertical", parentNode: ParentNode, children: VerticalLayoutNode[] }

export type StageLayout =
    { type: "Stage", middleLine?: boolean, leftNode: Layouts, rightNode?: Layouts } |
    { type: "Stage", middleLine?: boolean, leftNode?: Layouts, rightNode: Layouts }

export type TreeLayout = { type: "Tree", parentNode: OrganigramNode, stages: (StageLayout[] | [...(StageLayout[]), ThreeChildLayout]) }

export type OrganigramNode = ParentNode | LeftNode | MiddleNode | RightNode | VerticalLayoutNode

type _node = { title: string, roles?: string[], color?: string, href?: string, popupHref?: string, newsNode: false } |
    ({ title: string, roles?: string[], color?: string, href?: string, popupHref?: string, newsNode: true } & { upperTitle?: string, newsLinks?: string[]})

export type VerticalLayoutNode = { type: "VerticalNode" } & _node

export type ParentNode = { type: "ParentNode" } & _node

export type LeftNode = { type: "LeftNode" } & _node

export type MiddleNode = { type: "MiddleNode" } & _node

export type RightNode = { type: "RightNode" } & _node
