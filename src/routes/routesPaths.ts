export interface IRoute {
  path: string;
  fullUrl: string;
}


export const HOME: IRoute = {
  path: "home",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

