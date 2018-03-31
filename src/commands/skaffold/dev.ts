'use strict';
import * as vscode from 'vscode';
import * as util from "./util";

export function skaffoldDev(skaffoldFileUri?: vscode.Uri) {
    util.runSkaffold("dev", skaffoldFileUri);
}
