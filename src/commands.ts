
/* IMPORT */

import {alert, exec, getActiveFilePath, getProjectRootPaths, isInsiders} from 'vscode-extras';
import {isString} from './utils';

/* MAIN */

const open = ( insiders?: boolean ): void => {

  const filePath = getActiveFilePath ();
  const folderPaths = getProjectRootPaths ();
  const targetPaths = [...folderPaths, filePath].filter ( isString );

  const app = insiders ?? isInsiders () ? 'code-insiders' : 'code';

  if ( !targetPaths.length ) return alert.error ( `You have to open a file or project before being able to open it in "${app}"` );

  exec ( app, targetPaths, { detached: true } );

};

const openInsiders = (): void => {

  return open ( true );

};

/* EXPORT */

export {open, openInsiders};
