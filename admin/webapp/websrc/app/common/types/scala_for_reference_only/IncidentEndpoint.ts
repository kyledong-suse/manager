// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export interface IncidentEndpoint {
  name: string;
  reported_at: string;
}

export function isIncidentEndpoint(v: any): v is IncidentEndpoint {
  return typeof v['name'] === 'string' && typeof v['reported_at'] === 'string';
}
