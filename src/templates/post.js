import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Footer from '../components/Footer';
import Time from '../components/Time';
import Title from '../components/Title';

import RehypeReact from 'rehype-react';
import Link from '../components/Link';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'a': Link
  }
}).Compiler;

const PostTemplate = ({data}) => {
  const post = data.markdownRemark;
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <main>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Title level='1'>{post.frontmatter.title}</Title>
        <Time>{post.frontmatter.date}</Time>
        {renderAst(post.htmlAst)}
      </main>
      <hr />
      <b>Your are always welcome to follow <Link href="https://medium.com/functionalhick">Medium</Link> and <Link href="https://twitter.com/maksugr">Twitter</Link>, ⭐️ and create issues on <Link href="https://github.com/maksugr/functionalhick">GitHub</Link>, read publications on <Link href="https://functionalhick.online/">functionalhick.online</Link>. Feel free to give any feedback, I am in touch 🙌🏻</b>
      <Footer />
    </div>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      htmlAst
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
