
/* IMPORT */

import * as _ from 'lodash';
import * as absolute from 'absolute';
import * as openPath from 'open';
import * as path from 'path';
import * as vscode from 'vscode';
import Utils from './utils';

/* COMMANDS */

async function open ( insiders? ) {

  const {activeTextEditor} = vscode.window,
        editorPath = activeTextEditor && activeTextEditor.document.fileName,
        rootPath = Utils.folder.getRootPath (),
        app = insiders ? 'Visual Studio Code - Insiders' : 'Visual Studio Code',
        appName = insiders ? 'Code Insiders' : 'Code',
        paths = [];

  if ( rootPath ) paths.push ( rootPath );
  if ( editorPath && absolute ( editorPath ) ) paths.push ( editorPath );

  if ( !paths.length ) return vscode.window.showErrorMessage ( `You have to open a file or project before being able to open it in ${appName}` );

  paths.forEach ( path => openPath ( path, app ) );

}

function openInsiders () {

  return open ( true );

}

/* EXPORT */

export {open, openInsiders};
