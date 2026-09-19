import React from 'react';
/* Quote: testimonial in Space Grotesk Light. cite is three stacked label lines: name / role / date — never the source name. */
export function Quote({author,role,date,children,style,...rest}){
  return <blockquote style={{margin:0,...style}} {...rest}>
    <p style={{font:'var(--type-quote)',margin:0}}>“{children}”</p>
    {author&&<cite style={{display:'grid',gap:6,marginTop:24,fontStyle:'normal',font:'var(--type-label)',textTransform:'uppercase',letterSpacing:'var(--tracking-label)'}}><span>{author}</span>{role&&<span style={{color:'var(--fg-muted)'}}>{role}</span>}{date&&<span style={{color:'var(--fg-muted)'}}>{date}</span>}</cite>}
  </blockquote>;
}
