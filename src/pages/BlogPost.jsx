import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <header className="mb-4">
          <h1 className="text-3xl font-bold">Blog Post Title {id}</h1>
        </header>
        <main>
          <p className="text-muted-foreground">This is the full content of blog post {id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec libero fermentum, a tincidunt nulla facilisis. Integer nec magna sit amet arcu tincidunt tincidunt.</p>
        </main>
      </div>
      <aside className="w-full lg:w-1/3">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <img src="/images/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
          <p className="text-muted-foreground">Hi, I'm John Doe, a passionate blogger who loves to write about tech and life.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li><Link to="/category/tech" className="text-primary hover:underline">Tech</Link></li>
            <li><Link to="/category/life" className="text-primary hover:underline">Life</Link></li>
            <li><Link to="/category/travel" className="text-primary hover:underline">Travel</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
          <ul className="space-y-2">
            <li><Link to="/post/1" className="text-primary hover:underline">Post Title 1</Link></li>
            <li><Link to="/post/2" className="text-primary hover:underline">Post Title 2</Link></li>
            <li><Link to="/post/3" className="text-primary hover:underline">Post Title 3</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogPost;