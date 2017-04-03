'use strict';

// this file "copy.js" was created as a copy of "font.js"
// and updated to copy fules like doc and docx (documents)

import path from 'path';

const copy = ({
  gulp,
  config,
  plugins,
  taskTarget
}) => {
  const dir = config.directory;
  const dest = path.join(tackTarget, dir.asset.replace(/\_/, ''));

  gulp.task('copy', () => {
    return gulp
      .src(path.join(
        dir.source,
        dir, asset,
        '**/*.{doc,docx}'
      ))
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));

  });
};

export default copy;
