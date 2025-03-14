// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface FileMonitorProfile {
  group: string;
  filters: Array;
}

export function isFileMonitorProfile(v: any): v is FileMonitorProfile {
  return (
    typeof v['group'] === 'string' && v['filters'] && isArray(v['filters'])
  );
}
