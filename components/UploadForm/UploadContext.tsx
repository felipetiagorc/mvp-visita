type FetchState = 'idle' | 'pending' | 'success' | 'failed';

export interface UploadManager {
  upload: (files: FileList) => void;
  addRefreshCallback: (cb: () => void) => void;
  removeRefreshCallback: (cb: () => void) => void;
}

export interface UploadFile {
  id: number;
  name: string;
  status: FetchState;
  loaded: number;
  total: number;
}
