import { sanityClient } from 'sanity:client';
import type { TCodeSnippet } from '../types/types';

export const getSanityCodeSnippets = async (): Promise<TCodeSnippet[]> => {
  const codeSnippets = await sanityClient.fetch(`*[_type == "codeSnippet"]{
    _id,
    title,
    description,
    code
  }`);
  return codeSnippets;
}