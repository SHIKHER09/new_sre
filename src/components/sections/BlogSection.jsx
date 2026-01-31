import React from 'react';

const BlogSection = () => {
    return (
        <section id="blog" className="scroll-mt-24">
            <div className="flex gap-2 items-center mb-8">
                <span className="text-green-400">➜</span>
                <span className="text-cyber-cyan">~</span>
                <span className="text-slate-200">cat ./blog_posts.txt</span>
            </div>

            <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/30 backdrop-blur-sm">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-800 text-xs font-mono text-slate-500 uppercase tracking-wider">
                    <div className="col-span-2">Date</div>
                    <div className="col-span-8">Title</div>
                    <div className="col-span-2 text-right">Tags</div>
                </div>
                {[
                    { date: '2023-10-15', title: 'Scaling Kubernetes Clusters to 10k Nodes', tags: ['K8s', 'Scale'] },
                    { date: '2023-09-22', title: 'Zero-Downtime Deployments with ArgoCD', tags: ['DevOps', 'CI/CD'] },
                    { date: '2023-08-10', title: 'Optimizing React Performance with Server Components', tags: ['React', 'Perf'] },
                    { date: '2023-07-05', title: 'The Art of Chaos Engineering', tags: ['SRE', 'Chaos'] },
                ].map((post, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-12 gap-4 p-4 border-b border-slate-800/50 last:border-0 hover:bg-slate-800/50 transition-colors cursor-pointer group"
                    >
                        <div className="col-span-2 font-mono text-sm text-slate-500 group-hover:text-cyber-cyan transition-colors">{post.date}</div>
                        <div className="col-span-8 font-medium text-slate-200 group-hover:text-white transition-colors flex items-center gap-2">
                            <span className="opacity-0 group-hover:opacity-100 text-cyber-cyan transition-opacity">➜</span>
                            {post.title}
                        </div>
                        <div className="col-span-2 text-right">
                            <span className="text-xs font-mono text-neon-purple bg-neon-purple/10 px-2 py-1 rounded">{post.tags[0]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
