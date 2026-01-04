import { useQuery } from '@tanstack/react-query';

const API_URL = 'http://localhost:5000/api';

export const useAbout = () => {
  return useQuery({
    queryKey: ['about'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/about`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });
};

export const useEducation = () => {
  return useQuery({
    queryKey: ['education'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/education`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });
};

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/skills`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });
};

export const useExperience = () => {
  return useQuery({
    queryKey: ['experience'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/experience`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/projects`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });
};

export const useCertificates = () => {
  return useQuery({
    queryKey: ['certificates'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/certificates`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });
};
