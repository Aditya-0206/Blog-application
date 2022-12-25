import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login/login.component";
import { SignupComponent } from "./auth/signup/signup/signup.component";
import { PostsCreateComponent } from "./posts/posts-create/posts-create/posts-create.component";
import { PostsListComponent } from "./posts/posts-list/posts-list/posts-list.component";



const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'create', component: PostsCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostsCreateComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
