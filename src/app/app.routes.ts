import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { MissionComponent } from './pages/mission/mission.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            {path: "mission", component: MissionComponent}

        ]
    },

    {
        path: "",
        component: AuthLayoutComponent,
        children: [
            {path: "register" , component:RegisterComponent},

        ]
    }

];
