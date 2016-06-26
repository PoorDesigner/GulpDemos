using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SassCompiler.Startup))]
namespace SassCompiler
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
