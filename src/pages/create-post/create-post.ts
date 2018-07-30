import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationService } from '../../services/authentication.service';
import { WordpressService } from '../../services/wordpress.service';

/**
 * Generated class for the CreatePostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html',
})
export class CreatePostPage {
  title;
  content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public wordpressService: WordpressService,
    public authenticationService: AuthenticationService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

  onAddPost(){
    let token: string;

    token = localStorage.getItem('wpIonicToken');
    this.authenticationService.validateAuthToken(token);

    this.wordpressService.createPost(this.title,this.content,token).subscribe(data => {
        console.log(data);
     })

        this.navCtrl.push(LoginPage);
        
     }
}
