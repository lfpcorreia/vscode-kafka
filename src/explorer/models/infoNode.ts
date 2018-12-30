import * as vscode from "vscode";

import { icons } from "../../constants";
import { NodeBase } from "./nodeBase";

export class InformationItem implements NodeBase {
    public label: string;
    public readonly contextValue = "information";

    constructor(message: string) {
        this.label = message;
    }

    getChildren(element: NodeBase): Promise<NodeBase[]> {
        return Promise.resolve([]);
    }

    getTreeItem(): vscode.TreeItem {
        return {
            label: this.label,
            collapsibleState: vscode.TreeItemCollapsibleState.None,
            iconPath: icons.information,
        };
    }
}