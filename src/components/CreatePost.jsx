<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css"
function CreatePost()
{
    return <form>
    <div class="mb-3">
      <label for="userId" class="form-label"> Enter your UserId</label>
      <input type="text" class="form-control" id="userId" placeholder="Enter your userId."/>
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">Post Title</label>
      <input type="text" class="form-control" id="title" placeholder="How are you feeling??"/>
    </div>
    <div class="mb-3">
      <label for="body" class="form-label">Post Content</label>
      <textarea type="text" class="form-control" id="body" placeholder="Tell us more about it." rows="4"/>
    </div>
    <div class="mb-3">
      <label for="reactions" class="form-label">Number of Reactions</label>
      <input type="text" class="form-control" id="reactions" placeholder="Enter total number of reactions."/>
    </div>
    <div class="mb-3">
      <label for="tags" class="form-label">Tags</label>
      <input type="text" class="form-control" id="tags" placeholder="Enter tags with space."/>
    </div>
    <button type="submit" class="btn btn-primary">Post</button>
  </form>
}
=======
import "bootstrap/dist/css/bootstrap.min.css"
function CreatePost()
{
    return <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
}
>>>>>>> 601622e0c0c7801ab571a42189d66ebe843e6009
export default CreatePost;