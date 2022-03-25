import { Action, Thunk, Computed } from 'easy-peasy';
import { Selection as D3Selection, ZoomBehavior } from 'd3';
import { ElementId, Elements, Transform, Node, Edge, Rect, Dimensions, XYPosition, OnConnectFunc, OnConnectStartFunc, OnConnectStopFunc, OnConnectEndFunc, SelectionRect, HandleType, SetConnectionId, NodePosUpdate, NodeDiffUpdate, FitViewParams, TranslateExtent, SnapGrid, FlowElement } from '../types';
declare type TransformXYK = {
    x: number;
    y: number;
    k: number;
};
declare type NodeDimensionUpdate = {
    id: ElementId;
    nodeElement: HTMLDivElement;
};
declare type InitD3 = {
    zoomPane: Element;
    defaultPosition: [number, number];
    defaultZoom: number;
    translateExtent?: TranslateExtent;
};
export interface StoreModel {
    width: number;
    height: number;
    viewportBox: Computed<StoreModel, Rect>;
    transform: Transform;
    elements: Elements;
    elementsMap: Computed<StoreModel, {
        [key: string]: FlowElement;
    }>;
    nodes: Computed<StoreModel, Node[]>;
    edges: Computed<StoreModel, Edge[]>;
    selectedElements: Elements | null;
    selectedNodesBbox: Rect;
    d3Zoom: ZoomBehavior<Element, unknown> | null;
    d3Selection: D3Selection<Element, unknown, null, undefined> | null;
    d3Initialised: boolean;
    minZoom: number;
    maxZoom: number;
    translateExtent: TranslateExtent;
    nodesSelectionActive: boolean;
    selectionActive: boolean;
    userSelectionRect: SelectionRect;
    connectionPending: boolean;
    connectionNodeId: ElementId | null;
    connectionOnlyNodeId: Computed<StoreModel, string | null>;
    connectionOnlyPortId: Computed<StoreModel, string | null>;
    connectionHandleType: HandleType | null;
    connectionPosition: XYPosition;
    snapToGrid: boolean;
    snapGrid: SnapGrid;
    nodesDraggable: boolean;
    nodesConnectable: boolean;
    elementsSelectable: boolean;
    reactFlowVersion: string;
    onConnect?: OnConnectFunc;
    onConnectStart?: OnConnectStartFunc;
    onConnectStop?: OnConnectStopFunc;
    onConnectEnd?: OnConnectEndFunc;
    setConnectionPending: Action<StoreModel, boolean>;
    setOnConnect: Action<StoreModel, OnConnectFunc>;
    setOnConnectStart: Action<StoreModel, OnConnectStartFunc>;
    setOnConnectStop: Action<StoreModel, OnConnectStopFunc>;
    setOnConnectEnd: Action<StoreModel, OnConnectEndFunc>;
    setElements: Action<StoreModel, Elements>;
    updateNodeDimensions: Action<StoreModel, NodeDimensionUpdate>;
    updateNodePos: Action<StoreModel, NodePosUpdate>;
    updateNodePosDiff: Action<StoreModel, NodeDiffUpdate>;
    setSelection: Action<StoreModel, boolean>;
    unsetNodesSelection: Action<StoreModel>;
    setSelectedElements: Action<StoreModel, Elements | Node | Edge>;
    updateTransform: Action<StoreModel, TransformXYK>;
    setInitTransform: Action<StoreModel, TransformXYK>;
    updateSize: Action<StoreModel, Dimensions>;
    initD3: Action<StoreModel, InitD3>;
    setMinZoom: Action<StoreModel, number>;
    setMaxZoom: Action<StoreModel, number>;
    setTranslateExtent: Action<StoreModel, TranslateExtent>;
    setSnapToGrid: Action<StoreModel, boolean>;
    setSnapGrid: Action<StoreModel, SnapGrid>;
    setConnectionPosition: Action<StoreModel, XYPosition>;
    setConnectionNodeId: Action<StoreModel, SetConnectionId>;
    setInteractive: Action<StoreModel, boolean>;
    setNodesDraggable: Action<StoreModel, boolean>;
    setNodesConnectable: Action<StoreModel, boolean>;
    setElementsSelectable: Action<StoreModel, boolean>;
    setUserSelection: Action<StoreModel, XYPosition>;
    updateUserSelection: Action<StoreModel, XYPosition>;
    unsetUserSelection: Action<StoreModel>;
    fitView: Action<StoreModel, FitViewParams>;
    zoomTo: Action<StoreModel, number>;
    zoom: Thunk<StoreModel, number, any, StoreModel>;
    zoomIn: Thunk<StoreModel>;
    zoomOut: Thunk<StoreModel>;
}
export declare const storeModel: StoreModel;
declare const store: import("easy-peasy").Store<StoreModel, import("easy-peasy").EasyPeasyConfig<{}, any>>;
export default store;
