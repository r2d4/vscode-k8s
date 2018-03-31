'use strict';
import * as vscode from 'vscode';
import * as util from "./util";

export function skaffoldRun(skaffoldFileUri?: vscode.Uri) {
    util.runSkaffold("run", skaffoldFileUri);
}
