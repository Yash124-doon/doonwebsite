import React from 'react';
import Link from 'next/link';

interface Document {
  id: string;
  title: string;
  documentUrl: string;
}

interface DocumentTableProps {
  title: string;
  documents: Document[];
}

const DocumentTable: React.FC<DocumentTableProps> = ({ title, documents }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">{title}</h2>
      {documents.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
                  Document Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-light uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-body text-text-DEFAULT">
                    {doc.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-body text-primary hover:underline">
                    <Link href={doc.documentUrl} target="_blank" rel="noopener noreferrer">
                      View Document
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-text-light">No documents available at this time.</p>
      )}
    </div>
  );
};

export default DocumentTable;