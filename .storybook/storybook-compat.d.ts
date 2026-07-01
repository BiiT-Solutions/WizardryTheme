declare module '@storybook/angular' {
  // Backward-compatible alias used by legacy stories.
  export type Story<TArgs = any> = (args: TArgs) => any;

  // Relax metadata typing to support Angular environment providers in legacy decorators.
  export function moduleMetadata(metadata: {
    declarations?: any[];
    imports?: any[];
    providers?: any[];
    schemas?: any[];
  }): any;
}

