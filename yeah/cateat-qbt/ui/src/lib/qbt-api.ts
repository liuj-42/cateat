export async function qbtFetch(sid: string, endpoint: string, options: RequestInit = {}) {
  return fetch(`http://192.168.1.173:8080/api/v2${endpoint}`, {
    ...options,
    headers: {
      'Cookie': `SID=${sid}`,
      ...options.headers
    }
  });
}