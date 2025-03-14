// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface Pattern {
  key: string;
  op: string;
  value: string;
  context?: string;
}

export function isPattern(v: any): v is Pattern {
  return (
    typeof v['key'] === 'string' &&
    typeof v['op'] === 'string' &&
    typeof v['value'] === 'string' &&
    (!v['context'] || typeof v['context'] === 'string')
  );
}
