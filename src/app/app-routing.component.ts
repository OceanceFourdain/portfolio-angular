import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ElementsComponent } from './elements/elements.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}