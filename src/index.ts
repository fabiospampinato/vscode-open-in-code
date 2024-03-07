
/* IMPORT */

import vscode from 'vscode';
import * as Commands from './commands';

/* MAIN */

const activate = (): void => {

  vscode.commands.registerCommand ( 'openInCode.open', Commands.open );
  vscode.commands.registerCommand ( 'openInCode.openInsiders', Commands.openInsiders );

};

/* EXPORT */

export {activate};
