/**
 * Created by dileepkumar on 4/9/18.
 */

import 'rxjs';

export const testEpic = action$ =>
  action$.filter(action => action.type === 'TEST')
    .mapTo({ type: 'TEST' })