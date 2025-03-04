// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface Group4SingleDTO {
  name: string;
  comment: string;
  domain: string;
  learned: boolean;
  reserved: boolean;
  criteria: Array;
  members: Array;
  policy_rules: Array;
  response_rules: Array;
  policy_mode?: string;
  platform_role: string;
  cap_change_mode?: boolean;
  cap_scorable?: boolean;
  kind: string;
  cfg_type?: string;
  not_scored: boolean;
}

export function isGroup4SingleDTO(v: any): v is Group4SingleDTO {
  return (
    typeof v['name'] === 'string' &&
    typeof v['comment'] === 'string' &&
    typeof v['domain'] === 'string' &&
    typeof v['learned'] === 'boolean' &&
    typeof v['reserved'] === 'boolean' &&
    v['criteria'] &&
    isArray(v['criteria']) &&
    v['members'] &&
    isArray(v['members']) &&
    v['policy_rules'] &&
    isArray(v['policy_rules']) &&
    v['response_rules'] &&
    isArray(v['response_rules']) &&
    (!v['policy_mode'] || typeof v['policy_mode'] === 'string') &&
    typeof v['platform_role'] === 'string' &&
    (!v['cap_change_mode'] || typeof v['cap_change_mode'] === 'boolean') &&
    (!v['cap_scorable'] || typeof v['cap_scorable'] === 'boolean') &&
    typeof v['kind'] === 'string' &&
    (!v['cfg_type'] || typeof v['cfg_type'] === 'string') &&
    typeof v['not_scored'] === 'boolean'
  );
}
