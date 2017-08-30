
/* IMPORT */

import * as vscode from 'vscode';
import Utils from './utils';

/* ACTIVATE */

function activate ( context: vscode.ExtensionContext ) {

  vscode.commands.executeCommand ( 'setContext', 'isInsiders', Utils.isInsiders () );

  return Utils.initCommands ( context );

}

/* EXPORT */

export {activate};
