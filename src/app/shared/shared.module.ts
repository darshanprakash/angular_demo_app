import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
    // pipes, components and directives can go into declarations
    declarations: [CapitalizePipe],
    exports: [CapitalizePipe]
})

export class SharedModule {

}