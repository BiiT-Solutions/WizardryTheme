import { Injectable } from '@angular/core';
import {biitIcon, BiitIcons} from "biit-icons-collection";

@Injectable({
  providedIn: 'root'
})
export class BiitIconService {

  private registry: Map<biitIcon, string> = new Map<biitIcon, string>();
  constructor() { }

  public registerIcons(icons: BiitIcons[]): void {
    icons.forEach(icon => this.registry.set(icon.name, icon.data))
  }

  public getIcon(iconName: biitIcon): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`Icon '${iconName} was not found'`);
    }
    return this.registry.get(iconName);
  }

}
